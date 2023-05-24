import { useState, useEffect } from 'react';
var useSimulateProgress = function () {
    var _a = useState(0), progress = _a[0], setProgress = _a[1];
    // set interval to simulate progress
    useEffect(function () {
        var interval = setInterval(function () {
            setProgress(function (prevProgress) {
                // reset after reaching 100
                if (prevProgress === 100) {
                    return 0;
                }
                // create random value
                var diff = Math.random() * 8;
                // return whichever is smaller
                return Math.min(prevProgress + diff, 100);
            });
        }, 300);
        return function () {
            clearInterval(interval);
        };
    }, []);
    return progress;
};
export default useSimulateProgress;
