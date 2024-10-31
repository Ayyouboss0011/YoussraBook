import React from 'react';
    import FlipPage from 'react-flip-page';
    import './App.css';

    function App() {
      const pages = [
        {
          title: "Page 1",
          content: "This is the content of the first page.",
        },
        {
          title: "Page 2",
          content: "This is the content of the second page.",
        },
        {
          title: "Page 3",
          content: "This is the content of the third page.",
        },
        {
          title: "Page 4",
          content: "This is the content of the fourth page.",
        },
      ];

      return (
        <div className="App">
          <h1>Flipbook Example</h1>
          <FlipPage
            orientation="horizontal"
            animationDuration={400}
            showSwipeHint
            uncutPages
          >
            {pages.map((page, index) => (
              <article key={index}>
                <h2>{page.title}</h2>
                <p>{page.content}</p>
              </article>
            ))}
          </FlipPage>
        </div>
      );
    }

    export default App;
