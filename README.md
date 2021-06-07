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
var struct  = chainparser('.some_function(param1=A).chain(extra=tag)');

// Chain Logic
function invokeChain(chainObj, result) {
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
     if(!args.counter) args.counter = 1;
     args.counter++
     console.log(fnName, args)
     let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(args), 1000);
    });
    return promise;
}

// Chainsaw
var chain = struct.tree[0];
invokeChain(chain,result);
```

### Acknowledgements

Timelion Query chain parser extracted from [Kable](https://github.com/lmangani/kibana-kable)

Elasticsearch and Kibana are trademarks of Elasticsearch BV, registered in the U.S. and in other countries.
