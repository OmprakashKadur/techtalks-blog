import Link from 'next/link';
import { Calendar, Clock, Tag, ArrowLeft, Share2, Bookmark, User } from 'lucide-react';

export default function TypeScriptAdvancedFeaturesPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,212,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.05),transparent_50%)]" />
      </div>

      {/* Navigation */}
      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm font-mono rounded-full border border-cyan-400/30">
                  Developer Tools
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                TypeScript 5.0: Advanced Features Deep Dive
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Master the latest TypeScript features and advanced type system concepts. Explore decorators, mapped types, conditional types, and more advanced patterns.
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Omee
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  November 20, 2024
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  18 min read
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['TypeScript', 'Advanced', 'Types', 'Decorators'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wide">
                  Tech Stack Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript 5.0', 'Node.js', 'React', 'Decorators'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Advanced Type System Features</h2>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  TypeScript 5.0 introduces several powerful features that make the type system more expressive and flexible. Let's explore these advanced concepts and see how they can improve your code.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4">1. Decorators (Stage 3)</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Decorators are a powerful way to add metadata and modify classes, methods, and properties at design time. They're particularly useful for frameworks like Angular, NestJS, and custom libraries.
                </p>

                <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Class Decorator Example</h4>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
{`function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Person {
  name = 'Max';
  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();`}
                  </pre>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">2. Mapped Types</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Mapped types allow you to create new types by transforming existing ones. They're incredibly powerful for creating utility types and generic interfaces.
                </p>

                <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Mapped Type Examples</h4>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Make all properties optional
type Partial<T> = {
  [P in keyof T]?: T[P];
};

// Make all properties readonly
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Make all properties required
type Required<T> = {
  [P in keyof T]-?: T[P];
};

// Pick specific properties
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Omit specific properties
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;`}
                  </pre>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">3. Conditional Types</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Conditional types introduce conditional logic into the type system, allowing you to create types that change based on other types.
                </p>

                <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Conditional Type Examples</h4>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Check if T is a function
type IsFunction<T> = T extends Function ? true : false;

// Extract return type of a function
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Extract parameter types of a function
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

// Check if T is an array
type IsArray<T> = T extends Array<any> ? true : false;

// Extract element type of an array
type ElementType<T> = T extends Array<infer E> ? E : never;`}
                  </pre>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">4. Template Literal Types</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Template literal types allow you to create string literal types using template literal syntax, enabling powerful string manipulation in the type system.
                </p>

                <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Template Literal Type Examples</h4>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Basic template literal types
type EmailLocale = 'en' | 'de' | 'fr';
type EmailType = 'welcome' | 'reset' | 'verification';

type EmailTemplate = \`\${EmailLocale}_\${EmailType}_email\`;

// Result: 'en_welcome_email' | 'en_reset_email' | 'en_verification_email' | 'de_welcome_email' | ...

// Advanced template literal types
type EventName = 'click' | 'hover' | 'focus';
type ElementType = 'button' | 'input' | 'div';

type EventHandlerName = \`on\${Capitalize<EventName>}\`;
type ElementEventHandlerName = \`on\${Capitalize<EventName>}\${Capitalize<ElementType>}\`;`}
                  </pre>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">5. Utility Types</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  TypeScript provides many built-in utility types that make common type transformations easy and readable.
                </p>

                <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Utility Type Examples</h4>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Record: Create an object type with specific keys and values
type UserRoles = Record<string, 'admin' | 'user' | 'guest'>;

// Exclude: Remove types from a union
type NonNullable<T> = T extends null | undefined ? never : T;

// Extract: Extract types from a union that are assignable to U
type Extract<T, U> = T extends U ? T : never;

// NonNullable: Remove null and undefined from a type
type User = {
  id: number;
  name: string | null;
  email: string | undefined;
};

type ValidUser = NonNullable<User>; // Removes null and undefined`}
                  </pre>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">6. Advanced Generic Constraints</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Generic constraints allow you to limit the types that can be used with generics, making them more type-safe and predictable.
                </p>

                <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Generic Constraint Examples</h4>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Constrain T to objects with a length property
function getLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

// Constrain T to be a constructor function
function createInstance<T extends new (...args: any[]) => any>(
  constructor: T,
  ...args: ConstructorParameters<T>
): InstanceType<T> {
  return new constructor(...args);
}

// Constrain T to be a key of object U
function getProperty<T, U extends keyof T>(obj: T, key: U): T[U] {
  return obj[key];
}`}
                  </pre>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">7. Type Guards and Type Predicates</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Type guards and type predicates help TypeScript understand the type of a variable in different code paths, enabling better type inference.
                </p>

                <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Type Guard Examples</h4>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Type predicate function
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

// Type guard function
function isNumber(value: unknown): boolean {
  return typeof value === 'number';
}

// Usage
function processValue(value: unknown) {
  if (isString(value)) {
    // TypeScript knows value is string here
    console.log(value.toUpperCase());
  } else if (isNumber(value)) {
    // TypeScript knows value is number here
    console.log(value.toFixed(2));
  }
}

// Discriminated unions
type Shape = 
  | { kind: 'circle'; radius: number }
  | { kind: 'rectangle'; width: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'rectangle':
      return shape.width * shape.height;
  }
}`}
                  </pre>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">8. Advanced Function Types</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  TypeScript provides powerful ways to type functions, including function overloads, generic functions, and complex function signatures.
                </p>

                <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Function Type Examples</h4>
                  <pre className="text-sm text-gray-300 overflow-x-auto">
{`// Function overloads
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

// Generic functions with constraints
function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

// Higher-order functions
type FunctionType<T extends any[], R> = (...args: T) => R;
type HigherOrderFunction<T extends any[], R> = (fn: FunctionType<T, R>) => FunctionType<T, R>;

// Curried function type
type Curried<T extends any[], R> = T extends [infer First, ...infer Rest]
  ? Rest extends []
    ? (arg: First) => R
    : (arg: First) => Curried<Rest, R>
  : R;`}
                  </pre>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">Best Practices</h3>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• <strong>Use meaningful type names:</strong> Create descriptive type aliases for complex types</li>
                  <li>• <strong>Leverage utility types:</strong> Use built-in utility types instead of writing custom ones</li>
                  <li>• <strong>Keep types simple:</strong> Avoid overly complex conditional types when possible</li>
                  <li>• <strong>Document complex types:</strong> Add comments explaining complex type logic</li>
                  <li>• <strong>Test your types:</strong> Use TypeScript's type checking to validate your type definitions</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4">Conclusion</h3>
                <p className="text-gray-300 leading-relaxed">
                  TypeScript 5.0's advanced features provide powerful tools for creating robust, type-safe applications. By mastering these concepts, you can build more maintainable code and catch errors at compile time rather than runtime. Start with the basics and gradually incorporate these advanced features into your projects.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-700/50">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-lg transition-colors duration-200 border border-gray-600/50">
                  <Bookmark className="w-4 h-4" />
                  Save
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-lg transition-colors duration-200 border border-gray-600/50">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
              
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                View All Posts
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
