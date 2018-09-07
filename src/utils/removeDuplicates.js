export function removeDuplicateVideos(videos) {
	let reversed = videos.slice(0).reverse()
	let unique = reversed.filter(function(element, index, self) {
		return index === self.indexOf(element)
	})
	unique.reverse()
	return unique
}