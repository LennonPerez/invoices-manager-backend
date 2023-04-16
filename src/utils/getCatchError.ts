export default function getCatchError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  } else {
    return "Unkown error";
  }
}
