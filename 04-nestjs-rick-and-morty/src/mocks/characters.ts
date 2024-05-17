import { http, HttpResponse } from 'msw'
import { TestCharacter, TestCharacter2 } from '@/types/Character'
import { CharactersResponse } from '@/types/CharactersReponse'

export const getAllCharacters = http.get(`*/api/character`, () => {
  const payload:CharactersResponse = {
    info: {
      count: 2,
      pages: 1,
      next: "",
      prev: null
    },
    results: [TestCharacter, TestCharacter2]
  }
  
  return HttpResponse.json(payload)
})

export const getCharacter = http.get(`*/api/character/1`, () => {
  return HttpResponse.json(TestCharacter)
})