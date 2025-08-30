# Performance Optimization: Blog API Calls

## Problem Identified

The application was experiencing redundant API calls to the Supabase endpoint:
```
/rest/v1/blog_posts?select=*&order=created_at.desc&published=eq.true
```

This endpoint was being called multiple times because:

1. **Multiple Components**: Three different components were independently calling the same API:
   - `LatestBlogPosts` (Home page) - fetching 5 posts
   - `About` page - fetching 3 posts  
   - `Blog` page - fetching all posts

2. **No Data Sharing**: Each component used the `useBlogs` hook independently, causing separate API requests

3. **No Caching**: The hook didn't implement any caching mechanism

## Solution Implemented

### 1. Centralized Data Management with React Context

Created `BlogContext` (`src/contexts/BlogContext.tsx`) that:
- Fetches blog data once and shares it across all components
- Implements intelligent caching (5-minute cache duration)
- Prevents multiple simultaneous API calls
- Provides memoized derived data (latest posts, recent posts, all posts)

### 2. Key Features of BlogContext

```typescript
interface BlogContextType {
  allPosts: BlogPost[];        // All published posts
  latestPosts: BlogPost[];     // Latest 5 posts (for home page)
  recentPosts: BlogPost[];     // Latest 3 posts (for about page)
  loading: boolean;            // Loading state
  error: string | null;        // Error state
  refreshPosts: () => Promise<void>; // Manual refresh function
}
```

### 3. Smart Caching Strategy

- **Cache Duration**: 5 minutes (configurable)
- **Duplicate Prevention**: Prevents multiple simultaneous fetches
- **Conditional Fetching**: Only fetches when cache expires or forced refresh
- **State Management**: Tracks fetch status and prevents race conditions

### 4. Component Updates

Updated all components to use the centralized context:

- `LatestBlogPosts` → uses `latestPosts` from context
- `About` page → uses `recentPosts` from context  
- `Blog` page → uses `allPosts` from context
- `Category` page → keeps direct API call (category-specific filtering)
- `Admin` page → keeps direct API call (admin-specific needs)

## Performance Benefits

### Before (Multiple API Calls)
```
Home Page: /rest/v1/blog_posts?select=*&order=created_at.desc&published=eq.true
About Page: /rest/v1/blog_posts?select=*&order=created_at.desc&published=eq.true  
Blog Page: /rest/v1/blog_posts?select=*&order=created_at.desc&published=eq.true
Total: 3 API calls for the same data
```

### After (Single API Call with Caching)
```
Initial Load: /rest/v1/blog_posts?select=*&order=created_at.desc&published=eq.true
Subsequent Navigation: No API calls (cached data)
Cache Refresh: Only after 5 minutes or manual refresh
Total: 1 API call with intelligent caching
```

## Implementation Details

### 1. Context Provider Setup

```typescript
// src/app/layout.tsx
<AuthProvider>
  <BlogProvider>
    {/* All components now have access to centralized blog data */}
    <Navigation />
    <div className="pt-16">
      {children}
    </div>
    <EnvironmentCheck />
    <PerformanceMonitor />
  </BlogProvider>
</AuthProvider>
```

### 2. Caching Logic

```typescript
const fetchPosts = useCallback(async (forceRefresh = false) => {
  // Prevent multiple simultaneous fetches
  if (isFetching) return;

  // Check if we need to fetch (cache expired or force refresh)
  const now = Date.now();
  if (!forceRefresh && now - lastFetch < CACHE_DURATION && allPosts.length > 0) {
    return; // Use cached data
  }

  // Fetch new data only when necessary
  // ... API call logic
}, [allPosts.length, lastFetch, isFetching, CACHE_DURATION]);
```

### 3. Memoized Derived Data

```typescript
// Latest 5 posts for home page
const latestPosts = useMemo(() => allPosts.slice(0, 5), [allPosts]);

// Latest 3 posts for about page  
const recentPosts = useMemo(() => allPosts.slice(0, 3), [allPosts]);
```

## Monitoring and Debugging

The solution includes:
- Console logging for debugging
- Performance monitoring through existing `PerformanceMonitor` component
- Error handling and user feedback
- Manual refresh capability for testing

## Future Enhancements

1. **Persistent Caching**: Implement localStorage for offline support
2. **Background Sync**: Refresh cache in background when user returns
3. **Selective Updates**: Only fetch new posts since last fetch
4. **Real-time Updates**: WebSocket integration for live updates
5. **Analytics**: Track cache hit rates and performance metrics

## Testing

To verify the optimization:

1. **Build the application**: `npm run build`
2. **Check Network Tab**: Should see only one API call to blog_posts
3. **Navigate between pages**: No additional API calls should occur
4. **Wait 5 minutes**: Cache should expire and trigger new fetch
5. **Manual refresh**: Use context's `refreshPosts` function

## Conclusion

This optimization eliminates redundant API calls by:
- Centralizing data fetching in a single context
- Implementing intelligent caching with configurable duration
- Preventing race conditions and duplicate requests
- Maintaining data consistency across all components

The solution reduces server load, improves user experience, and provides a foundation for future performance enhancements.
