// Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
enum TypesOfMedia {
  Type1 = "video",
  Type2 = "audio",
}
// Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
enum FormatsOfMedia {
  Format1 = "mp4",
  Format2 = ".mov",
  Format3 = ".mkv",
  Format4 = ".flv",
  Format5 = ".webM",
}

// Описание интерфейса, в котором:
// name - строка
// type - один из перечисления выше
// format = один из перечисления выше
// subtitles - необязательное поле типа строка
// marks - необязательное поле неизвестного типа

interface IMedia {
  name: string;
  type: TypesOfMedia;
  format: FormatsOfMedia;
  subtitles?: string;
  marks?: unknown;
}

function playMedia(
  { name, type, format, subtitles, marks }: IMedia = {
    name: "example",
    type: TypesOfMedia.Type1,
    format: FormatsOfMedia.Format1,
  }
): string {
  let marksLog: unknown;
  if (Array.isArray(marks)) {
    marksLog = marks.join();
  } else if (typeof marks === "string") {
    marksLog = marks;
  } else {
    marksLog = "Unsupported type of marks";
  }

  // Создать функционал, что если marks - это массив, то "сложить" все эелементы в одну строку и поместить в marksLog
  // Если это строка, то просто поместить её в marksLog
  // Если что-то другое - то marksLog = "Unsupported type of marks"
  // Не допускайте any!

  console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? "none"}`);
  // помните что это за оператор ??

  return "Media started";
}

playMedia({
  name: "WoW",
  format: FormatsOfMedia.Format1,
  type: TypesOfMedia.Type1,
  subtitles: "hmhmhm hmhmhm doh",
  marks: ["4:30", "5:40"],
});
