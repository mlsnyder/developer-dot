function insertAvaForm() {
    $('.avaform-wrapper').append('<div style="margin: 20px 20px 20px 20px; padding: 20px 20px 20px 20px;"> <label>Request a Free AvaTax Account</label> <form id="trial-form"> <div class="form-group"> <label for="name">First Name / Given Name</label> <input type="text" class="form-control" id="firstName" name="firstName" placeholder="" > </div> <div class="form-group"> <label for="name">Last Name / Family Name</label> <input type="text" class="form-control" id="lastName" name="lastName" placeholder=""> </div> <div class="form-group"> <label for="email">Email Address</label> <input type="email" class="form-control" id="email" name="email" placeholder=""> </div> <div class="form-group"> <label for="company">Company</label> <input type="text" class="form-control" id="company" name="company" placeholder=""> </div> <div class="form-group"> <label for="website">Website</label> <input type="text" class="form-control" id="website" name="website" placeholder=""> </div> <div class="form-group"> <label for="phone">Phone</label> <input type="tel" class="form-control" id="phone" name="phone" placeholder=""> </div> <div class="form-group" style="float:left;width:66%;margin-right:2%;"> <label for="street-address">Street Address</label> <input type="text" class="form-control" id="street-address" name="street-address" placeholder=""> </div> <div class="form-group" style="float:left;width:32%;"> <label for="city">City</label> <input type="text" class="form-control" id="city" name="city" placeholder=""> </div> <div class="form-group" style="float:left;width:32%;margin-right:2%;"> <label for="region">Region / State / Province</label> <input type="text" class="form-control" id="region" name="region" placeholder=""> </div> <div class="form-group" style="float:left;width:32%;margin-right:2%;"> <label for="country">Country</label> <input type="text" class="form-control" id="country" name="country" placeholder=""> </div> <div class="form-group" style="float:left;width:32%;"> <label for="postal-code">Postal Code</label> <input type="text" class="form-control" id="postal-code" name="postal-code" placeholder=""> </div> <button type="button" id="submit" class="btn btn-primary" onclick="return submitShort();" style="clear:both;">Submit</button> </form> <br/> <div id="ava-form-alert" class="alert alert-warning fade in" style="display: none;"> <span id="ava-form-info"></span> </div> </div>');
}

function submitShort() {
    const inputArr = $('#trial-form')[0];
    let failCount = 0;

    for (let i = 0; i < (inputArr.length - 1); i++) {
        const input = inputArr[i];

        if (input.value !== '') {
            input.className = inputArr[i].classList[0];
        }

        if (input.value === '') {
            input.placeholder = 'Required';
            input.className += ' required';
            failCount++;
        }
    }

    if (failCount > 0) {
        $('#ava-form-info').html('<strong>You are missing ' + failCount + ' required field(s).</strong>');
        $('#ava-form-alert').attr('class', 'alert alert-warning fade in');
        $('#ava-form-alert').show();
        return;
    }

    var c_id = null;

    // AvaTag is a marketing feature that gathers informaton and persists it across site visits
    if (AvaTag.getCombinedData()['CampaignID']) {
        c_id = AvaTag.getCombinedData()['CampaignID'];
    }
    // console.log("c_id = " + c_id);
    $('#ava-form-alert').hide();
    var payload = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        email: $('#email').val(),
        company: $('#company').val(),
        website: $('#website').val(),
        phone: $('#phone').val(),
        campaign: c_id,
        companyAddress: {
            line: $('#street-address').val(),
            city: $('#city').val(),
            region: $('#region').val(),
            country: $('#country').val(),
            postalCode: $('#postal-code').val()
        }
    };

    // console.log("payload: ", JSON.stringify(payload));
    $.ajax({
        url: 'https://rest.avatax.com/api/v2/accounts/freetrials/request',
        data: JSON.stringify(payload),
        contentType: 'application/json',
        beforeSend: function() {
            $('#submit').prop('disabled', true); // disable button
        },
        error: function(err) {
            var avataxerror = $.parseJSON(err.responseText);
            $('#ava-form-info').html(avataxerror.error.message);
            $('#ava-form-alert').attr('class', 'alert alert-warning fade in');
            $('#submit').prop('disabled', false);
            $('#ava-form-alert').show();
            // console.log('response: ', err);
        },
        dataType: 'json',
        success: function(data) {
            $('#ava-form-info').html('Success!  Your account credentials have been sent to <strong>' + data.accountDetailsEmailedTo + '</strong>.');
            $('#ava-form-alert').attr('class', 'alert alert-success fade in');
            $('#submit').prop('disabled', false);
            $('#ava-form-alert').show();
            // console.log('response: ', data);
        },
        type: 'POST'
    });
    return false;
}

// Populate forms on ready
$(
    function() {
        insertAvaForm();
    }
);
