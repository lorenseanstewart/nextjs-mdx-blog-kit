import { CodeBlockJS } from "../CodeBlocks";

// (1) If you need to use backticks within the template string below,
// you must escapte them with a backslash like so: \` .
// (2) If you're using ${} to interpolate variables, you also must
// escape the dollar sign like so: \${varName}.
const escapedBackticksCodeString = `function sayHello(name) {
  return \`Hello \${ name }\`;
}`;
export const EscapedBackticksCode = () => {
    return <CodeBlockJS code={escapedBackticksCodeString} />;
};

const codeString = `import React, { Component } from 'react';   
import FormContainer from './containers/FormContainer';

class App extends Component {  
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="col-md-9 centered">
            <h3>React.js Controlled Form Components</h3>
            <FormContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;`;
export const DemoCode = () => {
    return <CodeBlockJS code={codeString} />;
};
