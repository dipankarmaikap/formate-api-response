export default function formateApiResponse(rawData) {
  //Step One
  //Try group the content in one stracture
  //Eg: if item have same parent_id you can grop them all under one filed as a 'child'
  //Tip: you can easily user array.filter and array.map to do this.

  //Step Two
  //Clean up the response to be more simplified formate.
  //Make sure if item have a 'child'
  //loop over those and group them as well
  //Tip: array.map and array.reduce

  //Finally instade of returning the content as [] return as {}.
  //Tip: array.reduce

  return rawData
}
