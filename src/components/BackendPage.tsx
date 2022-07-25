import React, { useState } from "react";

class Backend {
  constructor() {
    this.aboveBelow = this.aboveBelow.bind(this);
    this.stringRotation = this.stringRotation.bind(this);
  }

  aboveBelow(numberList: number[], compareVal: number): Record<string, number> {
    let aboveBelowRecord: Record<string, number> = {
      above: 0,
      below: 0,
    };

    numberList.forEach((val) => {
      if (val > compareVal) {
        aboveBelowRecord["above"] += 1;
      }
      if (val < compareVal) {
        aboveBelowRecord["below"] += 1;
      }
    });

    return aboveBelowRecord;
  }

  stringRotation(value: string, rotation: number): string {
    let rotated = new Array(value.length);
    for (var i = 0; i < value.length; i++) {
      let newIndex = i + rotation;

      if (newIndex > value.length - 1) {
        //This works for big numbers
        newIndex = newIndex % value.length;
      }
      rotated[newIndex] = value[i];
    }

    return rotated.join();
  }
}

function BackendExercises() {
  const [numberList, setNumberList] = useState<string>("");
  const [compareVal, setCompareVal] = useState<number | undefined>(undefined);
  const [abResult, setAbResult] = useState<Record<string, number> | undefined>(
    undefined
  );
  const [rotateString, setRotateString] = useState<string>("");
  const [rotateAmount, setRotateAmount] = useState<number | undefined>(
    undefined
  );
  const [rotateResult, setRotateResult] = useState<string>("");
  const test = new Backend();

  const handleNumbersListChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    if (event.currentTarget.value === "" && numberList.length === 1)
      setNumberList("");
    if (!/^[-,0-9]+$/.test(event.currentTarget.value)) return;
    setNumberList(event.currentTarget.value);
  };

  const handleRotateStringChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    if (event.currentTarget.value === "" && rotateString.length === 1)
      setRotateString("");
    if (!/^[a-zA-Z]+$/.test(event.currentTarget.value)) return;
    setRotateString(event.currentTarget.value);
  };

  const aboveBelowSubmitted = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const values: number[] = numberList.split(",").map((v) => {
      return Number(v);
    });
    if (compareVal) {
      const result = test.aboveBelow(values, compareVal);
      setAbResult(result);
    }
  };

  const rotateSubmitted = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (rotateAmount) {
      const result = test.stringRotation(rotateString, rotateAmount);
      setRotateResult(result);
    }
  };

  return (
    <div className="flex flex-row gap-20 justify-evenly pt-60 text-bold text-2xl">
      <div>
        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => aboveBelowSubmitted(e)}
        >
          <label htmlFor="abovebelownums">
            Enter a list of numbers seperated by commas
          </label>
          <input
            id="abovebelownums"
            type="text"
            className="rounded h-12 px-4 text-black"
            value={numberList}
            onChange={handleNumbersListChange}
          />
          <label>Enter the number to be used for comparison</label>
          <input
            type="number"
            name="name"
            value={compareVal}
            className="rounded h-12 px-4 text-black text-black"
            onChange={(e) => setCompareVal(Number(e.currentTarget.value))}
          />
          <input type="submit" value="Submit" />
        </form>
        {abResult ? (
          <h1>
            Above: {abResult["above"]} Below: {abResult["below"]}
          </h1>
        ) : null}
      </div>
      <div>
        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => rotateSubmitted(e)}
        >
          <label htmlFor="abovebelownums">Enter the string to be rotated</label>
          <input
            id="abovebelownums"
            type="text"
            className="rounded h-12 px-4 text-black"
            value={rotateString}
            onChange={handleRotateStringChange}
          />
          <label>Enter the number to be used for rotation amount</label>
          <input
            type="number"
            name="name"
            value={rotateAmount}
            className="rounded h-12 px-4 text-black"
            onChange={(e) => setRotateAmount(Number(e.currentTarget.value))}
          />
          <input type="submit" value="Submit" />
        </form>
        {rotateResult !== "" ? <h1>{rotateResult}</h1> : null}
      </div>
    </div>
  );
}

export default BackendExercises;
