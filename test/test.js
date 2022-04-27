var cp = require('child_process');
// var child = cp.spawn("zcomp", [ "run", "bf.zlang"]); //the array is the arguments

cp.spawnSync("zcomp", [ "run", "bf.zlang"], { input: "Hello WOrld\n\n" });