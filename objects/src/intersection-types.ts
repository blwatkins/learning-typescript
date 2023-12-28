// Intersection Type Notes

function testIntersectionTypes(): void {
    type Draggable = {
        drag: () => void
    };

    type Resizeable = {
        resize: (width: number, height: number) => void
    };

    // Widget is an Intersection Type
    type Widget = Draggable & Resizeable;

    // using an intersection type

    let textBox: Widget = {
        drag: (): void => {
            console.log('Dragging the text box');
        },

        resize: (width: number, height: number): void => {
            console.log(`The new size of the text box is ${width} x ${height}!`);
        }
    }

    textBox.drag();
    textBox.resize(200, 500);
}



export { testIntersectionTypes };
