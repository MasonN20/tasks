import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Valentines"
    | "Halloween"
    | "Easter"
    | "SaintPatricks";

const HOLIDAY_EMOJIS: Record<Holiday, string> = {
    Christmas: "🎅",
    Valentines: "💖",
    Halloween: "🎃",
    Easter: "🐰",
    SaintPatricks: "🍀",
};

const ALPHABET_NEXT: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Easter: "Halloween",
    Halloween: "SaintPatricks",
    SaintPatricks: "Valentines",
    Valentines: "Christmas",
};

const YEAR_NEXT: Record<Holiday, Holiday> = {
    Valentines: "SaintPatricks",
    SaintPatricks: "Easter",
    Easter: "Halloween",
    Halloween: "Christmas",
    Christmas: "Valentines",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, changeh] = useState<Holiday>("Christmas");
    return (
        <div>
            Holiday: {HOLIDAY_EMOJIS[holiday]}
            <div>
                <Button
                    onClick={() => {
                        changeh(ALPHABET_NEXT[holiday]);
                    }}
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() => {
                        changeh(YEAR_NEXT[holiday]);
                    }}
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
