import { Application, Utils } from '@nativescript/core'

export function initRating() {
	const android = Application.android
	const context = Utils.android.getApplicationContext()
	const manager = com.google.android.play.core.review.ReviewManagerFactory.create(context)
	const request = manager.requestReviewFlow()
	request.addOnCompleteListener(new com.google.android.gms.tasks.OnCompleteListener({
		onComplete: task => {
			if (task.isSuccessful()) {
				const reviewInfo = task.getResult()
				manager.launchReviewFlow(android.foregroundActivity, reviewInfo)
			}
		}
	}))
}
