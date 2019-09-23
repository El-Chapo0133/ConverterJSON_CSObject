class Dispatcher {
    constructor(p_dataAcquired, p_dataTransformed) {
        this.dataAcquired = p_dataAcquired
        this.dataTransformed = p_dataTransformed
    }
    startListeningAcquire() {
        this.dataAcquired.listen()
    }
    startListeningTransform() {
        this.dataTransformed.listen()
    }
}