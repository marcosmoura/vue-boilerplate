export default function(input) {
  return input.replace(/(?:^|\s)\S/g, transformed => transformed.toUpperCase())
}
