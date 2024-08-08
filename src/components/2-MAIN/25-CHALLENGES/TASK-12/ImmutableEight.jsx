// so the shallow copy which created by the spread operator the field references to the same origianl object all the keys if the somthing cahnge in the key either it is nested or top reflects the change in the original objects???
// ChatGPT
// Yes, that's correct! When you create a shallow copy using the spread operator ({ ...data }), the top-level properties of the object are copied into a new object. However, if any of those properties are objects themselves (i.e., nested objects), they are not deeply copied. Instead, the references to those nested objects are copied.
const original = {
  name: 'Dhruvkumar',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    pinCode: '12345',
  },
};

const shallowCopy = { ...original };

// Modify the nested object in the shallow copy
shallowCopy.address.pinCode = '54321';

// Check the original object
console.log(original.address.pinCode); // Output: '54321'

// //
// Explanation
// Top-Level Properties: When you use the spread operator ({ ...original }), a new object (shallowCopy) is created, and the top-level properties of original are copied into it.
// Nested Objects: The address property is an object, and only the reference to this object is copied, not the actual object. This means both original.address and shallowCopy.address point to the same object in memory.
// Mutations Reflect in Both Objects: Because shallowCopy.address and original.address reference the same object, any changes made to shallowCopy.address (e.g., changing pinCode) will also be reflected in original.address.

//
// Key Takeaways
// Shallow Copy: A shallow copy is fine when you only need to copy an object with primitive values (e.g., strings, numbers). However, if your object contains nested objects or arrays, the nested references are shared between the original and the copied object.
// Mutations on Nested Objects: If you modify a nested object in the shallow copy, those changes will also appear in the original object because they reference the same underlying data.

// How to Avoid This?
// To prevent changes in the shallow copy from affecting the original object, you need to create a deep copy of the object.

// Deep Copy Example

const original1 = {
  name: 'Dhruvkumar',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    pinCode: '12345',
  },
};

// Deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original));

// Modify the nested object in the deep copy
deepCopy.address.pinCode = '54321';

// Check the original object
// console.log(original.address.pinCode); // Output: '12345'
// Deep Copy: In this case, deepCopy is a completely new object, with its own nested objects. Modifications to deepCopy.address do not affect original.address because they are separate objects in memory.
// Conclusion
// When using the spread operator for shallow copying, remember that nested objects are not deeply copied. They remain shared between the original and the copied object, so any changes to the nested objects will affect both. If you need to ensure that the original object remains unchanged, a deep copy is necessary.
// . Deep Copy Without Object.freeze:
// A deep copy creates a new instance of an object and all of its nested objects, ensuring no references to the original object remain. This method ensures that changes to the copied object do not affect the original object, but it doesn't inherently prevent modifications to the copied object.

// 2. Deep Copy with Object.freeze:
// When you use Object.freeze, you're making an object immutable, meaning that you cannot modify it once it's frozen. If you combine deep copying with Object.freeze, you're not only ensuring that the original object remains unaffected by changes to the copy, but you're also preventing any future modifications to the copied object.
// Key Points
// Deep Copy (JSON.parse(JSON.stringify(obj))): This creates a complete new copy of the object, ensuring no references to the original object. However, it does not inherently prevent mutations to the copy.

// Object.freeze: This function makes an object immutable, preventing any modifications. When combined with deep copying, it ensures that the new copy of the object cannot be altered.

// deepFreeze Function: This recursive function applies Object.freeze to the entire structure, ensuring that all nested objects are also frozen and therefore immutable.
// Comparison with a Simple Object.freeze
// Without Deep Copy:

// javascript
// Copy code
// const shallowCopy = { ...data };
// shallowCopy.address.pinCode = '54321';
// setData(Object.freeze(shallowCopy));
// // This approach only freezes the top-level properties. If address is not frozen, its properties (like pinCode) can still be changed, affecting the original object.
// // With Deep Copy and Freeze:

// const newData = deepCopyAndFreeze(data);
// newData.address.pinCode = '54321';
// setData(deepFreeze(newData));
// // This approach ensures that the entire structure is immutable. The original object remains untouched, and the new state object is fully protected from future modifications.
// // Using a deep copy combined with Object.freeze (or a recursive deepFreeze function) is a powerful way to ensure full immutability in your React state. This method not only creates a completely separate copy of the object but also ensures that no part of the new object (including nested objects) can be mutated. This is particularly important in React, where immutability ensures predictable and efficient component re-renders.
// Both code examples achieve the same functionality, ensuring that the data object and its nested objects are immutable after each state update. However, they differ in how they achieve this immutability:

// First Code Example (Manual Freezing)
// Deep Copy: Creates a deep copy using JSON.parse(JSON.stringify(obj)).
// Manual Freezing: After creating the deep copy, you manually freeze the top-level object and the nested address object.
// Direct Approach: This approach directly applies Object.freeze where needed.
// Second Code Example (Recursive Freezing)
// Deep Copy and Recursive Freezing: Creates a deep copy and then uses a deepFreeze function to recursively freeze the entire object, including any nested objects, no matter how deeply nested.
// More Comprehensive: This approach is more comprehensive, as it automatically freezes every nested object without needing to manually specify which objects to freeze.
// Key Points:
// Immutability:

// Both examples ensure that after calling setData, the data object is immutable.
// In both cases, the data and address objects are frozen, preventing any further changes.
// Flexibility:

// The first example is simpler and works well for shallow objects where you know the structure and can manually freeze nested objects.
// The second example is more flexible and reusable, particularly if the structure is complex or deeply nested. The recursive deepFreeze function ensures that all nested objects are frozen without manually freezing each one.
// Performance:

// The recursive approach might be slightly slower due to the recursive traversal, but this is usually negligible unless dealing with very large or deeply nested objects.
// Conclusion:
// Both code snippets are functionally equivalent in the context you provided, achieving the same result of immutable state management. The choice between them depends on the complexity of your data structure:

// Use the first approach if your objects are relatively simple and you want a straightforward implementation.
// Use the second approach if you anticipate needing to handle more complex or deeply nested objects and want a more general solution.
