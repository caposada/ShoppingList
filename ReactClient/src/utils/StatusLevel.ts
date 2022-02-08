export enum StatusLevel {
    Normal = "green",
    Warning = "olive",
    Danger = "yellow",
    Severe = "orange",
    Critical = "red"
};

export function GetColor(count: number) {
    var color = "primary";
    switch (true) {
        case (count <= 2): 
            color = StatusLevel.Normal.valueOf();
            break;
        case (count > 2 &&  count <= 4):
            color = StatusLevel.Warning.valueOf();
            break;
        case (count > 4 &&  count <= 6):
            color = StatusLevel.Danger.valueOf();
            break;
        case (count > 6 &&  count <= 8):
            color = StatusLevel.Severe.valueOf();
            break;
        case (count > 8):
            color = StatusLevel.Critical.valueOf();
            break;
        default:
            color = "primary";
            break;
    }
    return color;
}