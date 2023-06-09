declare interface Inquiry {
  diagnosisRecordId: number,
  userId: number,
  title: string,
  contents: string,
  regDate: Date,
  replyId: number,
  id: number,
}

declare interface Reply {
  replyId: number,
  userId: number,
  contents: string,
  inquiryId: number,
  regDate: Date,
}
