describe('Firt Try of AutoTesting', async () => {
  it('Karma Success Login test', async () => {
    // function getSignUpCredos() {
    //   let randomName = Math.random().toString(36).substring(2, 9);
    //   const UserName = `${randomName}@test.com`,
    //     pswrd = `${randomName}@test.com`;
    //   const creds = { login: UserName, password: pswrd };
    //   return creds;
    // }
    await browser.url('https://www.karmanow.com/');
    await $('.Button-bQDLqk').click();
    await $('.SignInLink-kMzBLm').click();
    const loginField = await $("input[placeholder='Enter Email Address']");
    const pswrdFiled = await $("input[placeholder='Password']");
    await $('#email').setValue('psina@gmail9.com');
    await $('#password').setValue('psina@gmail9.com');
    const inPutName = await $('#email').getValue();
    const inPutPswr = await $('#password').getValue();
    await console.log(inPutName, inPutPswr);
    await $('.StyledBaseButton-gyTOrt').click();
    await $('.StyledButtonBlue-dSzbFq').waitForExist();
  });
});
