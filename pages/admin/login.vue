<template>
  <div class="login">
    <div class="login__wrapper">
      <div class="login__box">
        <div class="login__logo">
          <img src="@/assets/img/kip-logo_2.svg" alt="" />
        </div>
        <h1 class="login__title">Welcome</h1>
        <p class="login__description">Hoş geldiň sapa geldiňiz!</p>
        <form class="login__form">
          <base-input style="margin-bottom: 17px" label="Login" />
          <base-input class="mb-4" type="password" label="Password" />
          <base-button>Save</base-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background: var(--gray-light);
  cursor: auto;

  &__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__box {
    padding: 40px 20px;
    border-radius: 20px;
    border: 1px solid #e9e7fd;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 506px;
  }

  &__logo {
    margin-bottom: 30px;
  }

  &__title {
    color: var(--text4);
    font-size: 40px;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 4px;
  }

  &__description {
    color: var(--text4);
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    margin-bottom: 40px;
  }

  &__form {
    width: 100%;
  }
}
</style>
