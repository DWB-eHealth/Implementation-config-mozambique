Bahmni.ConceptSet.FormConditions.rulesOverride  = {

'Xray, Extent of disease': function (formName, formFieldValues) {},
'HDS, New AE Reported': function (formName, formFieldValues) {
    var conditions = {enable: [], disable: []};
    var conditionConcept = formFieldValues['HDS, New AE Reported'];
    var conceptToEnable = "HDS, New AE ID number";
    if (conditionConcept != null) {
        if (conditionConcept == true) {
            conditions.enable.push(conceptToEnable)
        } else {
            conditions.disable.push(conceptToEnable)
        }
    } else {
        conditions.disable.push(conceptToEnable)
    }
    return conditions;
},
'HDS, New SAE Reported': function (formName, formFieldValues) {},

'Baseline, Has the patient ever been treated for TB in the past?': function (formName, formFieldValues) {
        var conditions = {
            enable: [],
            disable: []
        };
        var conditionConcept = formFieldValues['Baseline, Has the patient ever been treated for TB in the past?'];
        if (conditionConcept == "True") {
            conditions.enable.push("Baseline, If Yes, What was the year of the patients start of first TB treatment Details", "Baseline, Treatment for drug-susceptible TB", "Baseline, Treatment for drug-resistant TB");
        } else {
            conditions.disable.push("Baseline, If Yes, What was the year of the patients start of first TB treatment Details", "Baseline, Treatment for drug-susceptible TB", "Baseline, Treatment for drug-resistant TB");
        }
        return conditions;
    },
'Baseline, Treatment for drug-susceptible TB': function (formName, formFieldValues) {
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['Baseline, Treatment for drug-susceptible TB'];
        if (conditionConcept == "True") {
            conditions.enable.push("Baseline, How many drug-susceptible TB treatments", "Baseline, What is the outcome of the last DSTB treatment", "Baseline, Last DSTB treatment registration facility")
        } else {
            conditions.disable.push("Baseline, How many drug-susceptible TB treatments", "Baseline, What is the outcome of the last DSTB treatment", "Baseline, Last DSTB treatment registration facility")
        }
        return conditions;
    },
'Baseline, Treatment for drug-resistant TB': function (formName, formFieldValues) {
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['Baseline, Treatment for drug-resistant TB'];
        if (conditionConcept == "True") {
            conditions.enable.push("Baseline, How many drug-resistant TB treatments", "Baseline, What is the outcome of the last DRTB treatment", "Baseline, Last DRTB treatment registration facility")
        } else {
            conditions.disable.push("Baseline, How many drug-resistant TB treatments", "Baseline, What is the outcome of the last DRTB treatment", "Baseline, Last DRTB treatment registration facility")
        }
        return conditions;
    },
    'Baseline, Start date of past TB treatment': function (formName, formFieldValues) {
        var conceptToEnable = ["Baseline, End date of past TB treatment", "Baseline, Type of past TB treatment", "Baseline, Past TB treatment regimen type", "Baseline, Past TB treatment drug regimen", "Baseline, Past TB treatment outcome"];
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['Baseline, Start date of past TB treatment'];
        if (conditionConcept) {
            conditions.enable = conceptToEnable
        } else {
            conditions.disable = conceptToEnable
        }
        return conditions;
    },
    'Bacteriology, Xpert MTB result': function (formName, formFieldValues) {
        var rifconceptToEnable = "Bacteriology, RIF resistance result type"
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['Bacteriology, Xpert MTB result'];
        if (conditionConcept == "Detected") {
            conditions.enable.push(rifconceptToEnable)
        } else {
            conditions.disable.push(rifconceptToEnable)
        }
        return conditions;
    }
};
