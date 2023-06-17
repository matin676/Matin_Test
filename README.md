# PART A(Theory)

> ## Answer 1

The working of a website can be divided into two parts: the frontend and the backend.

- Frontend is the part of the website that users see and interact with. It is responsible for the website's appearance, layout, and functionality. Frontend developers use HTML, CSS, and JavaScript to create the frontend of a website.

- Backend is the part of the website that users do not see. It is responsible for storing and processing data, as well as running the website's applications. Backend developers use programming languages such as Python, Java, and C++ to create the backend of a website.

When a user visits a website, their browser sends a request to the website's server. The server then retrieves the requested information from the database and sends it back to the user's browser. The user's browser then displays the information on the screen.

The frontend provides the user with a way to interact with the website, while the backend provides the data and functionality that the user needs.

> ## Answer 2

Tags are the building blocks of HTML. They are used to define the structure of a web page, as well as the appearance and behavior of its elements.

There are two main types of tags in HTML:

- Block-level tags define elements that take up the entire width of the browser window, such as headings, paragraphs, and lists.

- Inline tags define elements that flow with the text, such as images, links, and spans.

Here are some examples of block-level tags:

- `<html>` defines the root element of an HTML document.
- `<head>` defines the head of an HTML document, which contains metadata about the document, such as its title and author.
- `<body>` defines the body of an HTML document, which contains the content of the document.

Here are some examples of inline tags:

- `<img>` defines an image.
- `<a>` defines a link.
- `<span>` defines a span of text, which can be styled using CSS.

> ## Answer 3

The Virtual DOM (VDOM) is a programming concept used in web development frameworks like React to efficiently update and render user interfaces. It acts as a lightweight copy of the actual DOM, representing the current state of the UI.

Here is an overview of the working procedure of the Virtual DOM:

1. Initial rendering: When you first create a component or load a web page, the Virtual DOM is created by creating a JavaScript object tree that represents the structure of the UI. This tree is known as the Virtual DOM tree.

2. Virtual DOM diffing: When there are updates to the UI, such as user interactions or changes in data, the Virtual DOM compares the new state with the previous state to determine the minimal set of changes required to update the UI.

3. Reconciliation: Once the differences are identified, React performs a process called reconciliation. It applies the necessary updates to the actual DOM to bring it in sync with the desired UI state. The reconciliation process is optimized to minimize the number of changes needed and improve performance.

4. Updating the actual DOM: After the reconciliation, React applies the required changes to the real DOM. However, instead of updating the entire DOM tree, React only updates the specific parts that have changed. This targeted approach reduces the amount of work needed to update the UI.

5. Re-rendering: React components can be re-rendered due to various reasons, such as changes in state or props. When a re-render is triggered, the Virtual DOM is created again, and the diffing and reconciliation process is repeated to update the actual DOM.

> ## Answer 4

| Feature        | MySQL                                                                  | NoSQL                                                                                      |
| :------------- | :--------------------------------------------------------------------- | :----------------------------------------------------------------------------------------- |
| Data model     | Relational                                                             | Non-relational                                                                             |
| Query language | SQL                                                                    | Varies by database                                                                         |
| Scalability    | Vertical                                                               | Horizontal                                                                                 |
| Performance    | Faster for traditional relational database operations                  | Faster for certain types of operations, such as storing large amounts of unstructured data |
| Use cases      | Applications that require complex queries and relational data modeling | Applications that require high performance, scalability, and flexibility                   |

> ## Answer 5

MongoDB is a NoSQL database that uses a document-oriented data model. This means that data is stored in documents that are similar to JSON objects. MongoDB is a schema-less database, which means that you do not need to define the structure of your data before you start storing it. This makes MongoDB very flexible and easy to use.

MongoDB is a distributed database, which means that it can be spread across multiple servers. This makes MongoDB very scalable and able to handle large amounts of data.

MongoDB is a fast database and can be used for a variety of applications, including:

- Web applications
- Big data analytics
- IoT applications
- Content management systems
