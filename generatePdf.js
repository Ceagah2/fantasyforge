import fs from "fs";
import pdf from "html-pdf";

const termsHtml = fs.readFileSync("./src/styledPdfs/styledTerms.html", "utf8");
const privacyHtml = fs.readFileSync(
  "./src/styledPdfs/styledPrivacy.html",
  "utf8"
);

const options = {
  format: "A4",
  border: {
    top: "1in",
    right: "1in",
    bottom: "1in",
    left: "1in",
  },
};

pdf.create(termsHtml, options).toFile("./termos_de_uso.pdf", (err, res) => {
  if (err) return console.log(err);
  console.log(`Termos de Uso PDF gerado: ${res.filename}`);
});

pdf
  .create(privacyHtml, options)
  .toFile("./politica_de_privacidade.pdf", (err, res) => {
    if (err) return console.log(err);
    console.log(`Política de Privacidade PDF gerado: ${res.filename}`);
  });
