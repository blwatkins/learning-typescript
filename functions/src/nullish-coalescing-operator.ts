// Nullish Coalescing Operator Notes

/* NOTES:
** - ?? is the nullish coalescing operator
**   - if the left side value is null or undefined, the right side value will be returned.
 */

function testNullishCoalescingOperator(): void {
    const logSpeed = (speed: number | null | undefined): void => {
        let speedValue: number = speed ?? 10;
        console.log(`I am traveling at ${speedValue} miles per hour.`);
    }

    logSpeed(45.3);
    logSpeed(null);
    logSpeed(undefined);
    logSpeed(0);
}

export { testNullishCoalescingOperator };
