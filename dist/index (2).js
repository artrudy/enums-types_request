// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
var TypesOfMedia;
(function (TypesOfMedia) {
    TypesOfMedia["Type1"] = "video";
    TypesOfMedia["Type2"] = "audio";
})(TypesOfMedia || (TypesOfMedia = {}));
// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
var FormatsOfMedia;
(function (FormatsOfMedia) {
    FormatsOfMedia["Format1"] = "mp4";
    FormatsOfMedia["Format2"] = ".mov";
    FormatsOfMedia["Format3"] = ".mkv";
    FormatsOfMedia["Format4"] = ".flv";
    FormatsOfMedia["Format5"] = ".webM";
})(FormatsOfMedia || (FormatsOfMedia = {}));
function playMedia(_a) {
    var _b = _a === void 0 ? {
        name: "example",
        type: TypesOfMedia.Type1,
        format: FormatsOfMedia.Format1
    } : _a, name = _b.name, type = _b.type, format = _b.format, subtitles = _b.subtitles, marks = _b.marks;
    var marksLog;
    if (Array.isArray(marks)) {
        marksLog = marks.join();
    }
    else if (typeof marks === "string") {
        marksLog = marks;
    }
    else {
        marksLog = "Unsupported type of marks";
    }
    // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
    // Если это строка, то просто поместить её в marksLog
    // Если что-то другое - то marksLog = "Unsupported type of marks"
    // Не допускайте any!
    console.log("Media " + name + format + " is " + type + "\n    Marks: " + marksLog + "\n    Subtitles: " + (subtitles !== null && subtitles !== void 0 ? subtitles : "none"));
    // помните что это за оператор ??
    return "Media started";
}
playMedia({
    name: "WoW",
    format: FormatsOfMedia.Format1,
    type: TypesOfMedia.Type1,
    subtitles: "hmhmhm hmhmhm doh",
    marks: ["4:30", "5:40"]
});
