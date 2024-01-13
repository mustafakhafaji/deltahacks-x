import React, { useState } from "react";

// current_depth = 0 => modes
// current_depth = 1 => makes
// current_depth = 2 => models

function Menu() {
    const [current_depth, setCurrentDepth] = useState(0);
    const [current_make, setCurrentMake] = useState('');
    const [current_model, setCurrentModel] = useState('');

    // initial menu is modes -> makes -> models
    // back button

    function handleBackButton() {
        // Don't render button if depth is 0
        // Render button if depth > 1
        // Sets menu back one level

        setCurrentDepth(current_depth - 1);

        // Reset state data.
        switch (current_depth) {
            case 0:
                setCurrentMake('');
            case 1:
                setCurrentModel('');
        }
    }

    function handleSelectMake(make) {
        
    }

    function handleSelectModel(model) {

    }

    return (<View>

    </View>)
}

export default Menu;