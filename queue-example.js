while (queue.waitForMessage()) {
	queue.processNextMessage();
}