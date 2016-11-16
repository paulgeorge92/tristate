# tristate
tristate Button is a JQuery plugin to implement tristate buttons.
## Installation
1. Download the files.
2. Load the tristate-1.0.min.css
3. Load the jquery and tristate-1.0.min.js

## Usage
Tri-State can be applied to any div element <br/>
### Initialize tristate
```$(‘div’).tristate(options)``` <br/>
#### Parameters
| Parameter			| type			| Default Value	| Description														|
| ------------------|:-------------:| -------------:|-------------------------------------------------------------------|
| off				| string		| OFF			| Text to be displayed for OFF state								|
| intermediate		| string		| Intemediate	| Text to be displayed for Intermediate state						|
| on				| string		| ON			| Text to be displayed for ON state									|
| background		| color code	| #4f4b4b		| Background colour of Tri-State button								|
| sliderColor		| color code	| #fee500		| colour of button representing the state							|
| initial			| string		| Intermediate	| Initial state of button- Any of three (OFF / Intermediate / ON)	|
| offColor			| color code	| #e54135		| Background colour for OFF state									|
| intermediateColor	| color code	| #91117e		| Background colour for Intermediate state							|
| ONColor			| color code	| #378c25		| Background colour for ON state									|

All keys are optional<br/>

```$(‘div’).tristate()``` <br/>
This will generate a tristate button with default values <br/>
The functions **tristateOFF()**, **tristateInter()**, **tristateON()**  can be used to perform used defined actions for each state.
## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
MIT LICENSE