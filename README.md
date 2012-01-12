# WhiteRabbit

```js
$('form').on('keyup', 'input', WhiteRabbit.stop(500, function () {
	console.log(this.value);
}));
```

Check out `examples/browser.html` for more examples.

## Browser side

Use the distributed versions of WhiteRabbit found in the
`dist` folder of the git repo:
[https://github.com/DrPheltRight/whiterabbit]().

If you want to compile your own clone the git repo and then
run `cake build`.

## Server side

Install using NPM like so:

	npm install whiterabbit

## License

MIT

## Author

Luke Morton