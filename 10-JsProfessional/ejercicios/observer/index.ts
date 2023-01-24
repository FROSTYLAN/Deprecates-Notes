interface Observer {
    update: (data: any) => void;
}

interface Subject {
    subscribe: (observer: Observer) => void;
    unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject {
    observers: Observer[] = [];

    constructor() {
    const el : any = document.querySelector("#value");
        el.addEventListener('input', () => {
            this.notify(el.value);
        })
    }

    subscribe (observer: Observer) {
        this.observers.push(observer);
    }

    unsubscribe (observer: Observer) {
        const index = this.observers.findIndex(obs => {
            return obs === observer
        });
        this.observers.slice(index, 1);
    }

    notify(data: any) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class PriceDisplay implements Observer {
    private el: any;

    constructor() {
        this.el = document.querySelector("#price")
    }

    update(data: any) {
        this.el.innerHTML = data;   
    }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);