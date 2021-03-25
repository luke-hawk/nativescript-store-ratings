# Nativescript: Store Ratings
This plugin exposes the native In-App Reviews for [iOS](https://developer.apple.com/documentation/storekit/skstorereviewcontroller) and [Android](https://developer.android.com/guide/playcore/in-app-review). Please refer to the respective guidelines of Apple and Google. 

## Installation
```
tns plugin add nativescript-store-ratings
```

## Usage

You can ask for a review anywhere in your app by importing
```js
import * as storeRating from 'nativescript-store-ratings';
```

and calling
```js
storeRating.initRating();
```

That's it! Your user will be prompted to review your app by tapping on a star and leave an additional comment. Note: The dialog won't show in development on Android. It'll only be displayed if your app is on the internal test track or in production. For more information about testing the integration on Android please refer to this [guide](https://developer.android.com/guide/playcore/in-app-review/test)


