# SAVER

Simple account ledger showing your current balance, debits (withdrawals) and credits (deposits)

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install node_modules at project root.

```bash
yarn install
```

## Usage

```python

Get a simulator / debug device running:

- https://reactnative.dev/docs/running-on-device

Get real data for the app:

- There is a data.json file located within json/ at the project root
- This file is hosted at https://jsonkeeper.com/ and defined in app ready to pull in data
- If the hosted json file has expired or not working then please copy this json found within json/data.json
- Paste the data and host at https://jsonkeeper.com/
- Copy the url that your json is now hosted at
- Paste this url into the empty string of the 'fetchData' function found within App.js (Line 36)

Running the app on your device / simulator:

- Make sure you have either a device plugged in with debugging enabled or a xcode / android studio installed to be able to run a device simulator
- At the project repo root type yarn run 'android' or 'ios' for either device in to the terminal
- The app should build and pull in the data hosted by jsonkeeper
- Enjoy
```


## License
[marcusjh](https://marcusjh.co.uk)