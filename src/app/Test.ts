export class Test {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet(): string {
        return 'Hello ' + this.greeting;
    }

    show(x: number, y: number): number {
        return x + y;
    }

    static myAdd: (x: number, y: number) => number =
    function (x: number, y: number): number {
        return x + y;
    };
}
