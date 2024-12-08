## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/highlight.min.js"
  integrity="sha384-pGqTJHE/m20W4oDrfxTVzOutpMhjK3uP/0lReY0Jq/KInpuJSXUnk4WAYbciCLqT"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/languages/go.min.js"
  integrity="sha384-Mtb4EH3R9NMDME1sPQALOYR8KGqwrXAtmc6XGxDd0XaXB23irPKsuET0JjZt5utI"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-no5/zgQGupzPFGWV8VpJzfQau5/GI2v5b7I45l6nKc8gMOxzBHfgyxNdjQEnmW94 /es/languages/bash.js
sha384-u2nRnIxVxHkjnpxFScw/XgxNVuLz4dXXiT56xbp+Kk2b8AuStNgggHNpM9HO569A /es/languages/bash.min.js
sha384-conFwWhJOaJ8yLyZJUeX6IlE3YGpdoxazLFVV//QB5E+ASXMVyFnQE1V6SfgMzEq /es/languages/dockerfile.js
sha384-Dw9HMdbM7eZULiZ40cTZJ0NU88GUU5VQ22H+PVZ0IzxPGdnPPqKdsg4Uk3D2wbCB /es/languages/dockerfile.min.js
sha384-nIINmygUn21VB68UmIWrtPRAzGMEgd5hOcfEEeODoG90i4mJzcACbwcWJ3wCiSY2 /es/languages/gradle.js
sha384-D7ZaQQrEs5BBMC2isU1LZZm9ITf31H0h+uPhGRdse290qklkkvt+WXc4sFh3m70B /es/languages/gradle.min.js
sha384-ZCfS+s/zxY7O2bm2KoVJo1wUrLEpJDHZAi/LJAdJF5XjnfSWICkg6wHd2SEJGpyR /es/languages/java.js
sha384-716dHwZ7zbZcnEwTe7DLxlm5tH3Iyl8vSW5a2kYPgusEdp5k3A3jeZt0Ck+CjYE0 /es/languages/java.min.js
sha384-oQpcUGMBf+VDTHOLQ1uhPp1FgNBo0OZc9gbXGuVFwAogHlkh/Iw6cvKKgcgCQkmV /es/languages/javascript.js
sha384-3T8DJ91yCa1//uY9h8Bo4QLrgEtbz4ILN2x9kSM4QWX9/1kKu6UXC3RAbVQV85UQ /es/languages/javascript.min.js
sha384-R87hRh4kF8+iz2sB6FvLrfR0XZBohjFXeJKIXld1Eji2UVi+M2+OIgJKma/9Ko6u /es/languages/json.js
sha384-QFDPNpqtrgZCuAr70TZJFM4VCY+xNnyGKwJw2EsWIBJOVcWAns9PHcLzecyDVv+x /es/languages/json.min.js
sha384-prYrGnTm7oh5PuKMqLmR+7SrkN+R30qFCvQLyWRjl7bJqveap4Mb3RDeCe84KHSC /es/languages/kotlin.js
sha384-yM8aIXHTDq77S7Ar7r/O8Ix2yH07cPC1z48Qh6HBzcG2+plE8YMQn9goknWvawaH /es/languages/kotlin.min.js
sha384-Ws6d8NiJ3KKfuA1cOK/ZsY4zuyoJWeM2RQpQFv7yHr0J2/5NysTZV9nUqvFGNUqB /es/languages/properties.js
sha384-igG9bugojNt63V6EXJUpd8a75vlEeh+G9suHO7+lk9/sbdQ70Rn0KYsJNRcRxJDC /es/languages/properties.min.js
sha384-ZX3mm6sjLYWMBTMUJYzvQXYHNWVJkD+t1ppx4BysyVs6cVhvYFVuwMlVCeAwtwm9 /es/languages/sql.js
sha384-DloKeCkj/pTPHeqWu3keGoEPpZJGm44yQjSmSfpWasykAMUobM0hcYFFPsg1PE6K /es/languages/sql.min.js
sha384-40MP6/ECSjYaTAIf+/ibE2FPeFPQ53WbASndXxMOcXiQtgLbGXUStZVuPSngp7OD /es/languages/yaml.js
sha384-vXmhozexi2dHQBoniIEbWI5ZqDxyVfUs96BUGpqjWL1aberSp9pyxbvK8WCNASGB /es/languages/yaml.min.js
sha384-4SbTAv3AX2fuPCpSv6HW3p07YgA7hFfcwG2zJHtYv0ATIt1juD3IXj2NSYwTeIpm /languages/bash.js
sha384-83HvQQdGTWqnRLmgm19NjCb1+/awKJGytUX9sm3HJb2ddZ9Fs1Bst2bZogFjt9rr /languages/bash.min.js
sha384-KgZWfCUcAWOSNTSNOBUrbGToPbSNE30TSimcL9oKDQ35EApOQoCYU4o2ayix5Ohe /languages/dockerfile.js
sha384-jg4vR4ePpACdBVLAe+31BrI3MW4sfv1AS62HlXRXmQWk2q98yJqKR5VxHzuABw8X /languages/dockerfile.min.js
sha384-IZOqI6gvg7a5fn8xvCBNYqwORJwHrhNcuB0hu3O+gRI7Rd7VPHYaWkvSjz+ve/F2 /languages/gradle.js
sha384-Qh5sDx8XR/gARjQgTGqZrWsG9IWURWytCVZFqqUDtx4M16przYikOSpBofp/smEj /languages/gradle.min.js
sha384-cZ2d3Mo/jmTF9r2kHWcHmA8hehxX8N44UN6LSkEhaCRe6t8e9ntd5JEuafywm0aw /languages/java.js
sha384-8mc5ynnm3AlnXn8P3ccSqVAaZIDoijPM08/Hp4DABy6GMy7EHCQFwiIUoGAaGJiO /languages/java.min.js
sha384-p/utwvqrRVOLlz0BjJ0BCGCb2liTDipfz47/QmGXz9hoPIjCKYEgmYUC30VmGgZy /languages/javascript.js
sha384-L/XmDiyusXomLRGcRmcBpPlboRFjpQNV747OJvg+sEOpgGYvUsNwcC4JLNQ2dI6O /languages/javascript.min.js
sha384-psmmPlbfEWGyvRapexDqkVTgNz7Y1xvlGdLNWQSafI4GFQYFDXPZxVXH1laU4n6l /languages/json.js
sha384-Bb6DhE3tUpBROwypL78TbhRUs9QbCt2GxcxVSYglt2l3MefrYkm4CfwjfWhRfQaX /languages/json.min.js
sha384-Ve7wqoYcjaWimhzLnfK0sj2Lij8DmxK2diJ9kazkpifUrd7O+b2CbnHSxD3SCzqj /languages/kotlin.js
sha384-s0inyAR7LE5SVvn9VCZrQaiUxkDi+RsQdSKzFh2CjWf+LFd01DAjt9wtxGhT+4qT /languages/kotlin.min.js
sha384-QtRG6CHajNu8yO49AKRA40c5f+/TgBUmd4fdF1bUJ2M5YrnNowOBcglGip1EuK/E /languages/properties.js
sha384-sgNTtpv5Paw0Ux4jH4t4kp0frMSOTtws8wtoYOeystt+hVEKHDinMYYW/ZR5SKI9 /languages/properties.min.js
sha384-w/OmtgUvmlKWaVatpcvuEQxP7bkJzI5gLeeQkuXjApJNiQvNmXFL2PBM5RWgKqDr /languages/sql.js
sha384-2uzCjI3OPwJce6i2hphsYs1qqTqRrDnfPXbfjZggPWy2/Lgl8gzV9Hyl0jhhoWy4 /languages/sql.min.js
sha384-3KIoWvJ5JGRH35WAkzreEebY8sug+ZWeaOPS2r1KIfznEU9TtPFpxX6sIgtaiA9G /languages/yaml.js
sha384-bMkvdnz+wPu1ro0fqO3BaDWztc7RzSvw05MQFP6bhJKDcwpkrFYTfTFI9ndkP11l /languages/yaml.min.js
sha384-iu7szEhSNYtCBSmvcWJgD7dmSH1Q/DIZ6WTy2vM8DMLpId1yXXRKyOCQBKGPOqhC /highlight.js
sha384-ci0OGlc+TxImAOC2+KJKuUhy8i7TKVKife/0gZVnFHmxu4WRsE+CBGt+73KnOf/I /highlight.min.js
```

