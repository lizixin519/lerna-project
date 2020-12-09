'use strict';

import add from '@lerna-project/demo-core';
function demoCommon() {
    return add(a, b) * 2;
}

export default demoCommon;
