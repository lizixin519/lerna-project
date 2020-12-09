'use strict';

import add from '@lerna-project/demo-core';
function demoCommon(a, b) {
    return add(a, b) * 2;
}

export default demoCommon;
