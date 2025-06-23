// 这个文件包含一个类型错误，用于测试构建失败的情况
function testError(): string {
  const num: number = "这是一个字符串"; // 类型错误
  return num;
} 