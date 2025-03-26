import contentArray from "../data.js";

export default () => (
  <main>
    <h1>
      Welcome to <span>[Our company]</span>
    </h1>
    {contentArray.map((text) => (
      <p>{text}</p>
    ))}
    <p>
      <a href="#">Back to top</a>
    </p>
  </main>
);
