![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# sails-generate-basic-views


A basic `views` generator for use with the Sails command-line interface.


### Installation

Certain generators are installed by default in Sails, but they can be overridden.  Check the [Sails docs](http://sailsjs.org/#!/documentation) for information on installing generator overrides / custom generators.

<!--
```sh
$ npm install sails-generate-basic-views
```
-->


### Production Usage

##### On the command line

```sh
$ sails generate basic-views
```

##### In a node script

```javascript
var path = require('path');
var sailsgen = require('sails-generate');
var scope = {
	rootPath: path.resolve(__dirname)
};
sailsgen(require('sails-generate-basic-views'), scope, function (err) {
	if (err) throw err;

	// It worked.
});
```


### Development

To get started quickly and see this generator in action, run the `bin/index.js` script:

```sh
$ git clone YOUR_FORK_OF_THIS_REPO sails-generate-basic-views-fork
$ cd sails-generate-basic-views-fork
$ npm install
$ node ./bin
```

`bin/index.js` is a simple script, bundled only for convenience, that runs the generator with hard-coded scope variables.  Please feel free to modify that file however you like!  Also see `CONTRIBUTING.md` for more information on overriding/enhancing generators.



### Questions?

See `FAQ.md`.



### More Resources

- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Twitter](https://twitter.com/sailsjs)
- [Professional/enterprise](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#are-there-professional-support-options)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#where-do-i-get-help)


### License

**[MIT](./LICENSE)**
&copy; 2014 [balderdashy](http://github.com/balderdashy) & [contributors]
[Mike McNeil](http://michaelmcneil.com), [Balderdash](http://balderdash.co) & contributors

[Sails](http://sailsjs.org) is free and open-source under the [MIT License](http://sails.mit-license.org/).
