import { Application } from '@nativescript/core';

export function initRating() {
	const android = Application.android
	const manager = com.google.android.play.core.review.ReviewManagerFactory.create(android.context)
	const request = manager.requestReviewFlow()
	request.addOnCompleteListener(new com.google.android.play.core.tasks.OnCompleteListener({
	  onComplete: task => {
	    if (task.isSuccessful()) {
	      const reviewInfo = task.getResult();
	      manager.launchReviewFlow(android.foregroundActivity, reviewInfo)
	    }
	  }
	}))
}

