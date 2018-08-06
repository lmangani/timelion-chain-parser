# timelion-chain-parser

PEGjs parser for the Timelion/Kable query chain

```
chainparser = require('timelion-chain-parser');
var struct  = chainparser('.some_function(param1=A,param2=B).chain(extra=tag)');
```

### Acknowledgements

Timelion Query chain parser extracted from [Kable](https://github.com/lmangani/kibana-kable)

Elasticsearch and Kibana are trademarks of Elasticsearch BV, registered in the U.S. and in other countries.
