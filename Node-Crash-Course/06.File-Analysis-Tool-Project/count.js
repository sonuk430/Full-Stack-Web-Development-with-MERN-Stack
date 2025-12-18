const fs = require("fs");
const path = require("path");

//!Check line argument

const args = process.argv.slice(2);

//!Help message
function showHelp() {
  console.log("Text file analyzer");
  console.log("Uses: node count.js <file.txt> [options]");
  console.log("\nOptions");
  console.log("-h, --help Show help");
  console.log("-s, --summary Show only summary (total counts)");
  console.log("-d, --detail Show detailed statistics");
  console.log("\nExample");
  console.log(" node count.js sample.txt");
  console.log(" node count.js sample.txt --detail");
  process.exit(0);
}

//!Show help if no arguments or help
if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
  showHelp();
}

//!Pass command line option
const filePath = args[0];
const showDetail = args.includes("--details") || args.includes("-d");

//!Validate the file path
if (!filePath.endsWith(".txt")) {
  console.log("Error: Please provide a .txt file");
  process.exit(1);
}

//!check if file exists
if (!fs.existsSync(filePath)) {
  console.log(`Error: File ${filePath} does not exists`);
  process.exit(1);
}

//!Read file content

//!Count statistics
function countStatistics(buffer) {
  //* Convert buffer to string for text analysis
  const content = buffer.toString();
  //* count character(including whitespace)
  const charCount = buffer.length;
  //* Count lines(split by newline character)
  const lines = content.split(/\r?\n/);
  const lineCount = lines.length;
  //*Count words (split by whitespace)
  const word = content.split(/\s+/).filter((word) => word.length > 0);
  const wordCount = word.length;
  //* Get byte size
  const byteSize = buffer.byteLength;
  //* Additional statistics for detailed output

  let stats = {
    charCount,
    lineCount,
    wordCount,
    byteSize,
  };
  if (showDetail) {
    // Count non-whitespace characters
    const nonWhitespaceCharCount = content.replace(/\r/g, "").length;
  }
}

//! format byte size to human readable format
//! Display the statistics
