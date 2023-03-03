import * as React from 'react';
import { TextField } from "@funnelnek/ui";
import { Languages, Translator } from './components';

export const App = (): JSX.Element => {
    return (
        <div id="language-translator-application" className="app">
            <TextField></TextField>
            <Languages />
            <hr />
            <Translator />
        </div>
    );
};

export default App;