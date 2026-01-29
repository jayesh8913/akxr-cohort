const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, React.createElement("h1", null, "hello 1")),
    React.createElement("div", {
        id: "child2"
    }, React.createElement("h2", null, "hello 5askjkdihnasdfabsk"))
]);
// React 18 root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=f2.c36f364e.js.map
