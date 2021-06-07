# timelion-chain-parser

PEGjs parser for the Timelion/Kable query chain

```
chainparser = require('timelion-chain-parser');
var struct  = chainparser('.some_function(param1=A,param2=B).chain(extra=tag)');
```

### Example
```
// Load Chain-Parser
chainparser = require('timelion-chain-parser');
var struct  = chainparser('.some_function(param1=true).chain(extra=tag).end(param1=false)');

// Chain Runner
function invokeChain(chainObj, result, cb) {
    if (chainObj.chain.length === 0) return invoke('finalize', [result]);

    const chain = chainObj.chain;
    const link = chain.shift();

    const args = link.arguments || {};
    args.unshift(result || {type: 'null', value: null});

    const promise = invoke(link.function, args);
    return promise.then(function (result) {
      return invokeChain({type:'chain', chain: chain}, result);
    });
}
  
function invoke(fnName, args) {
     console.log(fnName, args)
     // Replace or Load your Custom Function Set
     let promise = new Promise(function(resolve, reject) {
        // Increment counter at each step
        if (args[0].test) args[0].test++
        setTimeout(() => resolve(args[0]), 2000);
    });
    return promise;
}

// Start the Chain
var chain = struct.tree[0];
var data = { test: 1 };
invokeChain(chain,data);
```

### Acknowledgements

Timelion Query chain parser extracted from [Kable](https://github.com/lmangani/kibana-kable)

Elasticsearch and Kibana are trademarks of Elasticsearch BV, registered in the U.S. and in other countries.
