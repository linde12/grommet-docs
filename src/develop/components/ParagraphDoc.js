var React = require('react');
var DocsArticle = require('../../DocsArticle');
var Paragraph = require('grommet/components/Paragraph');

var inline =
      "<Paragraph>\n" +
      "  ...\n" +
      "</Paragraph>";

var TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

var ParagraphDoc = React.createClass({
  render: function() {
    return (
      <DocsArticle title="Paragraph" colorIndex="neutral-3">

        <p>A paragraph of text.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>size       small|medium|large</code></dt>
            <dd>The size of the Paragraph text. Defaults to <code>medium</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>Default</h3>
          <div className="example">
          <Paragraph>{TEXT} <a>link</a></Paragraph>
          </div>
          <pre><code className="html hljs xml">
            {"<Paragraph>...</Paragraph>"}
          </code></pre>

          <h3>Small</h3>
          <div className="example">
          <Paragraph size="small">{TEXT} <a>link</a></Paragraph>
          </div>
          <pre><code className="html hljs xml">
            {"<Paragraph size=\"small\">...</Paragraph>"}
          </code></pre>

          <h3>Large</h3>
          <div className="example">
          <Paragraph size="large">{TEXT} <a>link</a></Paragraph>
          </div>
          <pre><code className="html hljs xml">
            {"<Paragraph size=\"large\">...</Paragraph>"}
          </code></pre>

        </section>


        <section>
          <h2>Misc base text elements</h2>
          <div className="example">
            <h1><strong>H1</strong> Light</h1>
            <h2><strong>H2</strong> Light</h2>
            <h3><strong>H3</strong> Light</h3>
            <h4><strong>H4</strong> Light</h4>
            <h5><strong>H5</strong> Light</h5>
            <h6><strong>H6</strong> Light</h6>
            <blockquote>Blockquote</blockquote>
          </div>
        </section>

      </DocsArticle>
    );
  }
});

module.exports = ParagraphDoc;
