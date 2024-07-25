msgText = '''
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Simple Transactional Email</title>
    <style media="all" type="text/css">
      @media all {
        .btn-primary table td:hover {
          background-color: #ec0867 !important;
        }

        .btn-primary a:hover {
          background-color: #ec0867 !important;
          border-color: #ec0867 !important;
        }
      }
      @media only screen and (max-width: 640px) {
        .main p,
        .main td,
        .main span {
          font-size: 16px !important;
        }

        .wrapper {
          padding: 8px !important;
        }

        .content {
          padding: 0 !important;
        }

        .container {
          padding: 0 !important;
          padding-top: 8px !important;
          width: 100% !important;
        }

        .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }

        .btn table {
          max-width: 100% !important;
          width: 100% !important;
        }

        .btn a {
          font-size: 16px !important;
          max-width: 100% !important;
          width: 100% !important;
        }
      }
      @media all {
        .ExternalClass {
          width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }

        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }

        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          line-height: inherit;
        }
      }
    </style>
  </head>
  <body
    style="
      font-family: Helvetica, sans-serif;
      -webkit-font-smoothing: antialiased;
      font-size: 16px;
      line-height: 1.3;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      background-color: #f4f5f6;
      margin: 0;
      padding: 0;
    "
  >
    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="body"
      style="
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #f4f5f6;
        width: 100%;
      "
      width="100%"
      bgcolor="#f4f5f6"
    >
      <tr>
        <td
          style="
            font-family: Helvetica, sans-serif;
            font-size: 16px;
            vertical-align: top;
          "
          valign="top"
        >
          &nbsp;
        </td>
        <td
          class="container"
          style="
            font-family: Helvetica, sans-serif;
            font-size: 16px;
            vertical-align: top;
            max-width: 600px;
            padding: 0;
            padding-top: 24px;
            width: 600px;
            margin: 0 auto;
          "
          width="600"
          valign="top"
        >
          <div
            class="content"
            style="
              box-sizing: border-box;
              display: block;
              margin: 0 auto;
              max-width: 600px;
              padding: 0;
            "
          >
            <!-- START CENTERED WHITE CONTAINER -->
            <span
              class="preheader"
              style="
                color: transparent;
                display: none;
                height: 0;
                max-height: 0;
                max-width: 0;
                opacity: 0;
                overflow: hidden;
                mso-hide: all;
                visibility: hidden;
                width: 0;
              "
              >This is preheader text. Some clients will show this text as a
              preview.</span
            >
            <table
              role="presentation"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="main"
              style="
                border-collapse: separate;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                background: #ffffff;
                border: 1px solid #eaebed;
                border-radius: 16px;
                width: 100%;
              "
              width="100%"
            >
              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td
                  class="wrapper"
                  style="
                    font-family: Helvetica, sans-serif;
                    font-size: 16px;
                    vertical-align: top;
                  "
                  valign="top"
                >
                  <table>
                    <tbody>
                      <tr>
                        <td style="padding: 24px">
                          <p
                            style="
                              font-family: Helvetica, sans-serif;
                              font-size: 20px;
                              font-weight: normal;
                              margin: 0;
                              margin-bottom: 16px;
                              color: #9dca00;
                            "
                          >
                            ${title}
                          </p>
                          <p
                            style="
                              font-family: Helvetica, sans-serif;
                              font-size: 16px;
                              font-weight: normal;
                              margin: 0;
                              margin-bottom: 16px;
                            "
                          >
                            Sometimes you just want to send a simple HTML email with a simple design and clear call to action. This is it.
                          </p>
                          <table align="center" style="margin: 0 auto; text-align: center;">
                            <tbody>
                              <tr>
                                <td>
                                  <a
                                    href="https://fitproject.pl/"
                                    target="_blank"
                                  >
                                    <img
                                      src="https://i.ibb.co/bgb2nKC/logo.png"
                                      alt="logo"
                                      border="0"
                                      style="margin-top: 20px"
                                    />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    style="
                      background-color: #9dca00;
                      border-radius: 0 0 16px 16px;
                      color: white;
                      padding: 10px;
                    "
                  >
                    <table align="center">
                      <tbody>
                        <tr>
                          <td
                            style="
                              font-family: Helvetica, sans-serif;
                              font-size: 18px;
                              font-weight: normal;
                              margin: 0;
                            "
                          >
                            Obserwuj nasze social media:
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table align="center">
                      <tbody>
                        <tr>
                          <td style="padding-inline: 5px">
                            <a
                              target="_blank"
                              href="https://www.facebook.com/fitprojectcatering"
                            >
                              <img
                                height="24px"
                                style="max-height:24px;"
                                src="https://i.ibb.co/wKxzwnP/facebook.png"
                                alt="facebook"
                                border="0"
                              />
                            </a>
                          </td>
                          <td style="padding-inline: 5px">
                            <a
                              target="_blank"
                              href="https://www.instagram.com/fitprojectfitproject/"
                            >
                              <img
                                height="24px"
                                style="max-height:24px;"
                                src="https://i.ibb.co/WsJbKb7/instagram.png"
                                alt="instagram"
                                border="0"
                              />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>

              <!-- END MAIN CONTENT AREA -->
            </table>

            <!-- START FOOTER -->
            <div
              class="footer"
              style="
                clear: both;
                padding-top: 24px;
                text-align: center;
                width: 100%;
              "
            >
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                style="
                  border-collapse: separate;
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  width: 100%;
                "
                width="100%"
              >
                <tr>
                  <td
                    class="content-block"
                    style="
                      font-family: Helvetica, sans-serif;
                      vertical-align: top;
                      color: #9a9ea6;
                      font-size: 16px;
                      text-align: center;
                    "
                    valign="top"
                    align="center"
                  >
                    <span
                      class="apple-link"
                      style="
                        color: #9a9ea6;
                        font-size: 16px;
                        text-align: center;
                      "
                      >Fit Project 2024, biuro@fitproject.pl </span
                    >
                    <br />
                    Nie chcesz otrzymywać maili?
                    <strong>
                      <a
                        href="http://htmlemail.io/blog"
                        style="
                          text-decoration: none;
                          color: #9a9ea6;
                          font-size: 16px;
                          text-align: center;
                        "
                        >Usuń subskrypcję</a
                      >.
                    </strong>
                  </td>
                </tr>
              </table>
            </div>

            <!-- END FOOTER -->

            <!-- END CENTERED WHITE CONTAINER -->
          </div>
        </td>
        <td
          style="
            font-family: Helvetica, sans-serif;
            font-size: 16px;
            vertical-align: top;
          "
          valign="top"
        >
          &nbsp;
        </td>
      </tr>
    </table>
  </body>
</html>



'''