// Interface Notes

interface Savable {
    save(filename: string): void;
}

interface Printable extends Savable {
    documentName: string;
    print(): void;
}

class TextDocument implements Printable {
    public constructor(private _documentName: string) {

    }

    public get documentName(): string {
        return this._documentName;
    }

    // this will NOT cause a compiler error or a runtime error
    public save(): void {
        console.log(`Saving TextDocument ${this.documentName}...`);
    }

    public print(): void {
        console.log(`Printing the TextDocument ${this.documentName}...`);
    }
}

class ComputerFile implements Savable {
    public constructor() {
    }

    public save(filename: string): void {
        console.log(`Saving ComputerFile ${filename}...`);
    }
}

let text: TextDocument = new TextDocument('My File');
text.save();
// text.save('myFile.txt'); // this will cause a compiler error (save method of TextDocument has no parameters)
text.print();

let file: ComputerFile = new ComputerFile();
file.save('myFile.txt');
// file.save(); // this will cause a compiler error (save method of File requires 1 parameter)

function saveThings(things: Savable[]): void {
    console.log('Lots of things to save!');

    for (let thing of things) {
        // thing.save(); // this will cause a compiler error (save method of Savable requires 1 parameter)
        thing.save('filename-to-save.md'); // this will NOT cause a compiler or runtime error
    }
}

saveThings([
   new TextDocument('Things To Do Today!'),
   new ComputerFile(),
   new ComputerFile(),
   new TextDocument('Places to Visit')
]);
