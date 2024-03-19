function setPSQListingLink(businessLink) {
  if (!businessLink) {
    return
  } else {
    document.getElementById('psq-link')?.setAttribute('href', businessLink)
  }
}