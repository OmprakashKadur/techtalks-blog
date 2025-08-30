import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, User } from 'lucide-react';

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
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold mb-8 group transition-all duration-300"
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
            <header className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="px-4 py-2 bg-cyan-400/10 text-cyan-400 text-sm font-mono rounded-full border border-cyan-400/30 backdrop-blur-sm">
                  Developer Tools
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
                TypeScript 5.0: Advanced Features Deep Dive
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-8 max-w-3xl">
                Master the latest TypeScript features and advanced type system concepts. Explore decorators, mapped types, conditional types, and more advanced patterns that will elevate your development skills.
              </p>
              
              <div className="flex items-center gap-8 text-sm text-gray-400 mb-10">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">Omee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">November 20, 2024</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">18 min read</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {['TypeScript', 'Advanced', 'Types', 'Decorators'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-800/50 text-gray-300 text-sm font-medium rounded-full border border-gray-600/50 hover:border-cyan-400/50 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mb-10">
                <h3 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">
                  Tech Stack Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {['TypeScript 5.0', 'Node.js', 'React', 'Decorators'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-800/50 text-gray-300 text-sm font-medium rounded-full border border-gray-600/50 hover:border-cyan-400/50 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 space-y-16">
                <div className="space-y-8">
                  <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
                    Advanced Type System Features
                  </h2>
                  
                  <p className="text-lg text-gray-300 leading-8">
                    TypeScript 5.0 introduces several powerful features that make the type system more expressive and flexible. Let&apos;s explore these advanced concepts and see how they can improve your code quality and developer experience.
                  </p>
                </div>

                <section className="space-y-10">
                  <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                      <span className="text-cyan-400 text-2xl">1.</span>
                      Decorators (Stage 3)
                    </h3>
                    <p className="text-lg text-gray-300 leading-8 mb-6">
                      Decorators are a powerful way to add metadata and modify classes, methods, and properties at design time. They&apos;re particularly useful for frameworks like Angular, NestJS, and custom libraries.
                    </p>

                    <div className="space-y-4 mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Benefits:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 text-lg mt-1">✓</span>
                          <span className="text-gray-300 leading-7"><strong className="text-white">Metadata Injection:</strong> Add runtime information to classes and methods</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 text-lg mt-1">✓</span>
                          <span className="text-gray-300 leading-7"><strong className="text-white">Behavior Modification:</strong> Change how classes and methods work without modifying their code</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 text-lg mt-1">✓</span>
                          <span className="text-gray-300 leading-7"><strong className="text-white">Framework Integration:</strong> Essential for Angular, NestJS, and other modern frameworks</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
                      <h4 className="text-xl font-semibold text-cyan-400 mb-4">Class Decorator Example</h4>
                      <p className="text-gray-300 mb-4 leading-7">This decorator logs information when a class is instantiated:</p>
                      <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900/50 p-6 rounded-lg border border-gray-600/50">
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
                  </div>
                </section>

                <section className="space-y-10">
                  <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                      <span className="text-cyan-400 text-2xl">2.</span>
                      Mapped Types
                    </h3>
                    <p className="text-lg text-gray-300 leading-8 mb-6">
                      Mapped types allow you to create new types by transforming existing ones. They&apos;re incredibly powerful for creating utility types and generic interfaces that can adapt to different data structures.
                    </p>

                    <div className="space-y-4 mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Common Use Cases:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 text-lg mt-1">✓</span>
                          <span className="text-gray-300 leading-7"><strong className="text-white">Partial:</strong> Make all properties optional for flexible object creation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 text-lg mt-1">✓</span>
                          <span className="text-gray-300 leading-7"><strong className="text-white">Readonly:</strong> Prevent accidental modifications to object properties</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 text-lg mt-1">✓</span>
                          <span className="text-gray-300 leading-7"><strong className="text-white">Pick/Omit:</strong> Selectively include or exclude properties from types</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
                      <h4 className="text-xl font-semibold text-cyan-400 mb-4">Built-in Utility Types</h4>
                      <p className="text-gray-300 mb-4 leading-7">TypeScript provides these mapped types out of the box:</p>
                      <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900/50 p-6 rounded-lg border border-gray-600/50">
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
                  </div>
                </section>

                <section className="space-y-10">
                  <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                      <span className="text-cyan-400 text-2xl">3.</span>
                      Conditional Types
                    </h3>
                    <p className="text-lg text-gray-300 leading-8 mb-6">
                      Conditional types introduce conditional logic into the type system, allowing you to create types that change based on other types. This enables dynamic type creation based on input types.
                    </p>

                    <div className="space-y-4 mb-6">
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Powerful Features:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 text-lg mt-1">✓</span>
                          <span className="text-gray-300 leading-7"><strong className="text-white">Type Inference:</strong> Use <code className="bg-gray-700 px-2 py-1 rounded text-cyan-300">infer</code> to extract types from complex structures</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 text-lg mt-1">✓</span>
                          <span className="text-gray-300 leading-7"><strong className="text-white">Conditional Logic:</strong> Create types that change based on input type conditions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-green-400 text-lg mt-1">✓</span>
                          <span className="text-gray-300 leading-7"><strong className="text-white">Utility Creation:</strong> Build powerful type utilities like <code className="bg-gray-700 px-2 py-1 rounded text-cyan-300">ReturnType</code> and <code className="bg-gray-700 px-2 py-1 rounded text-cyan-300">Parameters</code></span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
                      <h4 className="text-xl font-semibold text-cyan-400 mb-4">Advanced Conditional Types</h4>
                      <p className="text-gray-300 mb-4 leading-7">These examples show how to extract and manipulate types:</p>
                      <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900/50 p-6 rounded-lg border border-gray-600/50">
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
                  </div>
                </section>

                <section className="space-y-10">
                  <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                      <span className="text-cyan-400 text-2xl">4.</span>
                      Template Literal Types
                    </h3>
                    <p className="text-lg text-gray-300 leading-8">
                      Template literal types allow you to create string literal types using template literal syntax, enabling powerful string manipulation in the type system for better type safety.
                    </p>

                    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
                      <h4 className="text-xl font-semibold text-cyan-400 mb-4">Template Literal Type Examples</h4>
                      <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900/50 p-4 rounded-lg border border-gray-600/50">
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
                  </div>
                </section>

                <section className="space-y-10">
                  <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                      <span className="text-cyan-400 text-2xl">5.</span>
                      Utility Types
                    </h3>
                    <p className="text-lg text-gray-300 leading-8">
                      TypeScript provides many built-in utility types that make common type transformations easy and readable. These utilities save time and improve code maintainability.
                    </p>

                    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
                      <h4 className="text-xl font-semibold text-cyan-400 mb-4">Utility Type Examples</h4>
                      <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900/50 p-4 rounded-lg border border-gray-600/50">
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
                  </div>
                </section>

                <section className="space-y-10">
                  <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                      <span className="text-cyan-400 text-2xl">6.</span>
                      Advanced Generic Constraints
                    </h3>
                    <p className="text-lg text-gray-300 leading-8">
                      Generic constraints allow you to limit the types that can be used with generics, making them more type-safe and predictable. This ensures your generic functions work with the expected types.
                    </p>

                    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
                      <h4 className="text-xl font-semibold text-cyan-400 mb-4">Generic Constraint Examples</h4>
                      <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900/50 p-4 rounded-lg border border-gray-600/50">
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
                  </div>
                </section>

                <section className="space-y-10">
                  <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                      <span className="text-cyan-400 text-2xl">7.</span>
                      Type Guards and Type Predicates
                    </h3>
                    <p className="text-lg text-gray-300 leading-8">
                      Type guards and type predicates help TypeScript understand the type of a variable in different code paths, enabling better type inference and safer runtime operations.
                    </p>

                    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
                      <h4 className="text-xl font-semibold text-cyan-400 mb-4">Type Guard Examples</h4>
                      <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900/50 p-4 rounded-lg border border-gray-600/50">
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
                  </div>
                </section>

                <section className="space-y-10">
                  <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                      <span className="text-cyan-400 text-2xl">8.</span>
                      Advanced Function Types
                    </h3>
                    <p className="text-lg text-gray-300 leading-8">
                      TypeScript provides powerful ways to type functions, including function overloads, generic functions, and complex function signatures that enable sophisticated function typing.
                    </p>

                    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
                      <h4 className="text-xl font-semibold text-cyan-400 mb-4">Function Type Examples</h4>
                      <pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900/50 p-4 rounded-lg border border-gray-600/50">
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
                  </div>
                </section>

                <section className="space-y-10">
                  <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-white mb-8">Best Practices</h3>
                    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-cyan-400 mb-3">Development Best Practices</h4>
                          <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                              <span className="text-green-400 text-lg mt-1">✓</span>
                              <div className="leading-7">
                                <strong className="text-white">Use meaningful type names:</strong>
                                <span className="block text-gray-300 mt-2">Create descriptive type aliases for complex types to improve readability and maintainability.</span>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-green-400 text-lg mt-1">✓</span>
                              <div className="leading-7">
                                <strong className="text-white">Leverage utility types:</strong>
                                <span className="block text-gray-300 mt-2">Use built-in utility types instead of writing custom ones to reduce code duplication.</span>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-green-400 text-lg mt-1">✓</span>
                              <div className="leading-7">
                                <strong className="text-white">Keep types simple:</strong>
                                <span className="block text-gray-300 mt-2">Avoid overly complex conditional types when possible to maintain type system performance.</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-cyan-400 mb-3">Maintenance Best Practices</h4>
                          <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                              <span className="text-green-400 text-lg mt-1">✓</span>
                              <div className="leading-7">
                                <strong className="text-white">Document complex types:</strong>
                                <span className="block text-gray-300 mt-2">Add comments explaining complex type logic for future developers and your future self.</span>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-green-400 text-lg mt-1">✓</span>
                              <div className="leading-7">
                                <strong className="text-white">Test your types:</strong>
                                <span className="block text-gray-300 mt-2">Use TypeScript&apos;s type checking to validate your type definitions and catch errors early.</span>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-green-400 text-lg mt-1">✓</span>
                              <div className="leading-7">
                                <strong className="text-white">Version control:</strong>
                                <span className="block text-gray-300 mt-2">Track type changes and document breaking changes in your type definitions.</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="space-y-10">
                  <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-white mb-8">Conclusion</h3>
                    <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 p-10 rounded-xl border border-cyan-400/20">
                      <div className="text-center mb-6">
                        <h4 className="text-2xl font-bold text-white mb-4">🚀 Ready to Level Up?</h4>
                        <p className="text-lg text-gray-300 leading-8 mb-6">
                          TypeScript 5.0&apos;s advanced features provide powerful tools for creating robust, type-safe applications. By mastering these concepts, you can build more maintainable code and catch errors at compile time rather than runtime.
                        </p>
                        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-600/50">
                          <h5 className="text-lg font-semibold text-cyan-400 mb-3">Next Steps:</h5>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="text-center">
                              <div className="text-2xl mb-2">📚</div>
                              <div className="text-white font-medium">Study</div>
                              <div className="text-gray-400">Practice with real examples</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl mb-2">⚡</div>
                              <div className="text-white font-medium">Implement</div>
                              <div className="text-gray-400">Use in your projects</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl mb-2">🚀</div>
                              <div className="text-white font-medium">Master</div>
                              <div className="text-gray-400">Become a TypeScript expert</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-16 pt-10 border-t border-gray-700/50">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-xl transition-all duration-200 border border-gray-600/50 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10">
                  <Bookmark className="w-5 h-5" />
                  Save Article
                </button>
                <button className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-xl transition-all duration-200 border border-gray-600/50 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
              
              <Link
                href="/blog"
                className="inline-flex items-center gap-3 text-cyan-400 hover:text-cyan-300 font-semibold text-lg transition-all duration-300 hover:gap-4"
              >
                View All Posts
                <ArrowLeft className="w-5 h-5 rotate-180" />
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
